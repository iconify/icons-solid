import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vi7d7k0gf.css';
import '../../css/h/hk4vhieox.css';
import '../../css/o/o5pdp4q-k.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="vi7d7k0gf"/><path class="hk4vhieox"/><path class="o5pdp4q-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:europris"} {...others} />);
}

export default Component;
