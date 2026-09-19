import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6vzv4bqp.css';
import '../../css/s/s3ckdxwss.css';
import '../../css/v/vbagb8yxb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="v6vzv4bqp"/><path class="s3ckdxwss"/><path class="vbagb8yxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:watsonx-ai"} {...others} />);
}

export default Component;
