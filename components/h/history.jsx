import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fb2xhv94q.css';
import '../../css/r/r-fuctb7v.css';
import '../../css/y/y8gsoobat.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fb2xhv94q"/><path class="r-fuctb7v"/><path class="y8gsoobat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:history"} {...others} />);
}

export default Component;
