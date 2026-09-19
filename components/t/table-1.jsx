import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uf0xtbtqb.css';

const viewBox = {"width":29,"height":24};
const content = `<path class="uf0xtbtqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:table-1"} {...others} />);
}

export default Component;
