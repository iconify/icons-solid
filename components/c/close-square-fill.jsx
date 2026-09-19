import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbqe6cbmw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hbqe6cbmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:close-square-fill"} {...others} />);
}

export default Component;
