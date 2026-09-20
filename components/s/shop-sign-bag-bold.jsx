import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qzs4ogjnt.css';
import '../../css/n/n_w_i9mtx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qzs4ogjnt"/><path class="n_w_i9mtx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shop-sign-bag-bold"} {...others} />);
}

export default Component;
