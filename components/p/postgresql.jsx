import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uj_-cngib.css';
import '../../css/z/z-izombsf.css';
import '../../css/e/ea86u9b3c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uj_-cngib"/><path class="z-izombsf"/><path class="ea86u9b3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:postgresql"} {...others} />);
}

export default Component;
