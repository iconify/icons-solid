import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4snlybdn.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wbthfebdn.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n_xx17adb.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><path id="SVGO5JmwbtK" class="y4snlybdn"/></defs><g class="ft5dv1b6b"><path class="wbthfebdn"/><use href="#SVGO5JmwbtK"/><use href="#SVGO5JmwbtK" clip-rule="evenodd" class="d2kvgvbvc"/><path class="n_xx17adb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:steering-wheel"} {...others} />);
}

export default Component;
