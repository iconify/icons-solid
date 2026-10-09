import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/da3bf5bbj.css';
import '../../css/g/gtz69mu0i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="da3bf5bbj"/><path class="gtz69mu0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bug-48"} {...others} />);
}

export default Component;
