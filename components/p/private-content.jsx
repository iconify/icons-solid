import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-srhgbjw.css';
import '../../css/i/io-ksobwe.css';
import '../../css/d/dhxhj3byh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b-srhgbjw"/><path class="io-ksobwe"/><path class="dhxhj3byh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:private-content"} {...others} />);
}

export default Component;
