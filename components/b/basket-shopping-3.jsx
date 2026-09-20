import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1egrjbgw.css';
import '../../css/d/drbq42kov.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w1egrjbgw"/><path class="drbq42kov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:basket-shopping-3"} {...others} />);
}

export default Component;
