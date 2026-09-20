import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3eno4b5g.css';
import '../../css/b/b2gz5jqgb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f3eno4b5g"/><path class="b2gz5jqgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:clipboard-solid"} {...others} />);
}

export default Component;
