import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2-ygo_xi.css';
import '../../css/j/j3loqwvbi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f2-ygo_xi"/><path class="j3loqwvbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:earpods-ear-bold"} {...others} />);
}

export default Component;
