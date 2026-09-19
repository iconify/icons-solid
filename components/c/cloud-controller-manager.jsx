import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xgzn1hbsd.css';
import '../../css/z/z8y_nwpda.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xgzn1hbsd"/><path class="z8y_nwpda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:cloud-controller-manager"} {...others} />);
}

export default Component;
