import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l9j-zbc3e.css';
import '../../css/b/bn3mc-eqy.css';
import '../../css/u/u7n-kwbie.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGbElNXbMo"><g class="ft5dv1b6b"><path clip-rule="evenodd" class="l9j-zbc3e"/><path class="bn3mc-eqy"/><path class="u7n-kwbie"/></g></mask></defs><path mask="url(#SVGbElNXbMo)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:car"} {...others} />);
}

export default Component;
