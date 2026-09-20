import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aio2xib1e.css';
import '../../css/h/hp8gss3tw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aio2xib1e"/><path class="hp8gss3tw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:warehouse-cart-package-ribbon-bold"} {...others} />);
}

export default Component;
