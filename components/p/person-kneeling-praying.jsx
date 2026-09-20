import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/regj2beml.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="regj2beml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-kneeling-praying"} {...others} />);
}

export default Component;
