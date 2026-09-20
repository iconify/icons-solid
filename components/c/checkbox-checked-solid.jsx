import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aisis0a7a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="aisis0a7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:checkbox-checked-solid"} {...others} />);
}

export default Component;
