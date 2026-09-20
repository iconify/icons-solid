import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxur0bc0h.css';
import '../../css/q/q114wtnjk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bxur0bc0h"/><path class="q114wtnjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:briefcase-fill"} {...others} />);
}

export default Component;
