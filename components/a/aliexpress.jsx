import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yl33b-fvk.css';
import '../../css/o/o6kz01jke.css';
import '../../css/o/oxyodjyqf.css';
import '../../css/g/g16ecdgti.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="yl33b-fvk"/><path class="o6kz01jke"/><path class="oxyodjyqf"/><path class="g16ecdgti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:aliexpress"} {...others} />);
}

export default Component;
