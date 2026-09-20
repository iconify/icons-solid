import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5tm-zk0d.css';

const viewBox = {"width":26,"height":26};
const content = `<path class="s5tm-zk0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wpf:nfccheckpoint"} {...others} />);
}

export default Component;
