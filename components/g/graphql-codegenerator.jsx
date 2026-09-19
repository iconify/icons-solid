import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsa3t6fnw.css';

const viewBox = {"width":393,"height":512};
const content = `<path class="rsa3t6fnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:graphql-codegenerator"} {...others} />);
}

export default Component;
