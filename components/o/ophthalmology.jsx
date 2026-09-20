import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxmhkjbxg.css';
import '../../css/c/cv78y-btj.css';
import '../../css/z/z9rvppbnc.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="zxmhkjbxg"/><path class="cv78y-btj"/><path class="z9rvppbnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:ophthalmology"} {...others} />);
}

export default Component;
