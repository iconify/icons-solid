import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gq9rmtbnw.css';
import '../../css/g/g77nglpfb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gq9rmtbnw"/><path class="g77nglpfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:apple-48-bold"} {...others} />);
}

export default Component;
