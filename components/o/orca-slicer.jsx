import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bsp5lfbpe.css';
import '../../css/i/ihbuegbvc.css';
import '../../css/i/iiu61dcee.css';
import '../../css/h/hydphr__h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bsp5lfbpe"/><path class="ihbuegbvc"/><path class="iiu61dcee"/><path class="hydphr__h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:orca-slicer"} {...others} />);
}

export default Component;
