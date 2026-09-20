import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/asbi602zl.css';
import '../../css/f/fr2owub7s.css';
import '../../css/k/kfd4e9bhd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="asbi602zl"/><path class="fr2owub7s"/><path class="kfd4e9bhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:brush2"} {...others} />);
}

export default Component;
