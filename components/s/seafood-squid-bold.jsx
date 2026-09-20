import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bym9qzlxy.css';
import '../../css/y/yzb5i2o5m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bym9qzlxy"/><path class="yzb5i2o5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:seafood-squid-bold"} {...others} />);
}

export default Component;
