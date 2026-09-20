import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3ky4jnzf.css';
import '../../css/j/jlozx9b3a.css';
import '../../css/w/wdip6sk2k.css';

const viewBox = {"width":512,"height":512};
const content = `<ellipse class="s3ky4jnzf"/><path class="jlozx9b3a"/><path class="wdip6sk2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pingvin-share-x"} {...others} />);
}

export default Component;
