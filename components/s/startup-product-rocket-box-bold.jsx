import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zd2v4sbqi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zd2v4sbqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:startup-product-rocket-box-bold"} {...others} />);
}

export default Component;
