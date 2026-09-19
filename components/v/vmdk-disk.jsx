import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tmbdk2b0r.css';
import '../../css/p/pmzg9nbdr.css';
import '../../css/x/x5lbktbtf.css';
import '../../css/c/cccmkiv6b.css';
import '../../css/s/sifs2853s.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="tmbdk2b0r"/><path class="pmzg9nbdr"/><circle class="x5lbktbtf"/><path class="cccmkiv6b"/><path class="sifs2853s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:vmdk-disk"} {...others} />);
}

export default Component;
