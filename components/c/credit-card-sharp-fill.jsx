import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pjof12r2z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pjof12r2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:credit-card-sharp-fill"} {...others} />);
}

export default Component;
