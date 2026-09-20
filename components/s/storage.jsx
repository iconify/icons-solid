import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qq3bjyb8c.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="qq3bjyb8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:storage"} {...others} />);
}

export default Component;
