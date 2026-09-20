import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uws2288gp.css';
import '../../css/b/b9dmkccal.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uws2288gp"/><path class="b9dmkccal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:eye-opened"} {...others} />);
}

export default Component;
