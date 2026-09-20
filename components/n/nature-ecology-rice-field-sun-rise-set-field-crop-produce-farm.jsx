import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8ydu_bpz.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="h8ydu_bpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:nature-ecology-rice-field-sun-rise-set-field-crop-produce-farm"} {...others} />);
}

export default Component;
