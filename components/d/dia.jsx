import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3ilb8yfl.css';
import '../../css/h/hjk7fac9x.css';
import '../../css/s/shoq0tb1c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s3ilb8yfl"/><path class="hjk7fac9x"/><path class="shoq0tb1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:dia"} {...others} />);
}

export default Component;
