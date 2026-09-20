import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqmnyq34e.css';
import '../../css/d/dpj2r3iow.css';
import '../../css/a/a4pj0s9uc.css';
import '../../css/o/ovvnhedwr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hqmnyq34e"/><path class="dpj2r3iow"/><path class="a4pj0s9uc"/><path class="ovvnhedwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:design-crop-edit-picture"} {...others} />);
}

export default Component;
