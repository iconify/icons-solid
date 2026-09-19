import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iyk4aoyft.css';
import '../../css/a/a24z59vtw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="iyk4aoyft"/><path class="a24z59vtw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:direction-ltr-fill-16"} {...others} />);
}

export default Component;
