import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gtbad5h4g.css';
import '../../css/o/o3c7m2drk.css';
import '../../css/r/rdqn1-b6x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gtbad5h4g"/><path class="o3c7m2drk"/><path class="rdqn1-b6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:home-chimney-2"} {...others} />);
}

export default Component;
