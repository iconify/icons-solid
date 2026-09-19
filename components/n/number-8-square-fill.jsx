import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mnox6ln0z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mnox6ln0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:number-8-square-fill"} {...others} />);
}

export default Component;
