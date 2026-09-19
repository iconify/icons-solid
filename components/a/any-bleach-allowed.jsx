import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2tqi_tyy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r2tqi_tyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ginetex:any-bleach-allowed"} {...others} />);
}

export default Component;
