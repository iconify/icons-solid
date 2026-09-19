import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qig625hpo.css';

const viewBox = {"width":1792,"height":1792};
const content = `<path class="qig625hpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:kanji-chu"} {...others} />);
}

export default Component;
