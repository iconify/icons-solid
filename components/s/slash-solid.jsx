import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dmlk_2cbm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dmlk_2cbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:slash-solid"} {...others} />);
}

export default Component;
