import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddn7u078w.css';
import '../../css/d/d1guyq2pd.css';
import '../../css/n/nmfn-h5ne.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ddn7u078w"/><path class="d1guyq2pd"/><path class="nmfn-h5ne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tag-bold-duotone"} {...others} />);
}

export default Component;
