import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcf9nvb2k.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vcf9nvb2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:quote-left"} {...others} />);
}

export default Component;
