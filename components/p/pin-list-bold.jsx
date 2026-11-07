import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_8azubyy.css';
import '../../css/u/ur2-jsh4j.css';
import '../../css/t/te90o_idu.css';
import '../../css/y/y3kxq9bxl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k_8azubyy"/><path clip-rule="evenodd" class="ur2-jsh4j"/><path class="te90o_idu"/><path clip-rule="evenodd" class="y3kxq9bxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pin-list-bold"} {...others} />);
}

export default Component;
