import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/utsj4bcuc.css';
import '../../css/m/mprl4mbnb.css';
import '../../css/e/e8068gado.css';

const viewBox = {"width":48,"height":48};
const content = `<circle class="utsj4bcuc"/><circle class="mprl4mbnb"/><circle class="e8068gado"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:more"} {...others} />);
}

export default Component;
