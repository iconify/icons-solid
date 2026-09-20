import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rdfhfmbbz {
  fill: var(--svg-color--e01920, #e01920);
  d: path("M9 5.25h1.5v3c0 4-.945 9.405-7.5 10.5v-2c1.5-.25 5.985-2 5.985-8.5zm2 0h2v13.5h-2zm4 0h-1.5v3c0 4 .945 9.405 7.5 10.5v-2c-1.5-.25-5.985-2-5.985-8.5z");
}
</style><path class="rdfhfmbbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:atri"} {...others} />);
}

export default Component;
