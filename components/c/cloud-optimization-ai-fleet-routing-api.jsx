import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/drwktt30k.css';
import '../../css/x/xcjpxq55x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="drwktt30k"/><path class="xcjpxq55x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-optimization-ai-fleet-routing-api"} {...others} />);
}

export default Component;
