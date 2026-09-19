import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-y486bsq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o-y486bsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:number-4-circle-fill"} {...others} />);
}

export default Component;
