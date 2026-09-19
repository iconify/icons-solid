import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zqzm5abuz.css';

const viewBox = {"width":256,"height":488};
const content = `<path class="zqzm5abuz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:newsvine"} {...others} />);
}

export default Component;
