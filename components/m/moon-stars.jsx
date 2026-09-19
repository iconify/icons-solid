import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3a194bvl.css';
import '../../css/d/dnmle-98o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer w3a194bvl"/><path class="dnmle-98o duoicon-primary-layer"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:moon-stars"} {...others} />);
}

export default Component;
