import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gb7_855gm.css';
import '../../css/k/kzfhceboh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gb7_855gm"/><path class="kzfhceboh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:phone-forwarded-duotone"} {...others} />);
}

export default Component;
