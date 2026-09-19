import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezyz04baj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ezyz04baj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:number-3-square-fill"} {...others} />);
}

export default Component;
