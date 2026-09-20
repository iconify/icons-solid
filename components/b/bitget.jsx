import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nf--c0vyf.css';
import '../../css/z/z72r2ab5f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nf--c0vyf"/><path class="z72r2ab5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:bitget"} {...others} />);
}

export default Component;
