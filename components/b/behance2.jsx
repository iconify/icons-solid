import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0v9jjbyk.css';
import '../../css/x/x3ykjurxz.css';
import '../../css/c/czxvcbrup.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="r0v9jjbyk"/><path class="x3ykjurxz"/><path class="czxvcbrup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:behance2"} {...others} />);
}

export default Component;
